import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatTreeModule, MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import { HttpClientModule,HttpClient } from '@angular/common/http';
// import { HighlightModule, HIGHLIGHT_OPTIONS,HighlightOptions } from 'ngx-highlightjs';
// import { HighlightJS } from 'ngx-highlightjs';
import { HighlightJsModule } from 'ngx-highlight-js';
import { HighlightJsDirective } from 'ngx-highlight-js';

import {TreeNode}from "../interfaces/node";
import {NodeService} from "../../services/node.service";
import {map} from "rxjs";
import { HighlightResult } from 'ngx-highlightjs';

const fileData: TreeNode[] = [
];
const imageFileExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".bmp",
  ".svg",
  ".tif",
  ".tiff",
  ".webp",
  ".ico",
  ".raw",
  ".eps",
];

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [

    NgForOf,
    NgClass,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    NgIf,HighlightJsDirective
  ],
  providers:[HttpClientModule,NodeService,
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent {
  treeControl =new NestedTreeControl<TreeNode>(node =>node.children);
  public dataSource =new MatTreeNestedDataSource<TreeNode>();
  @Input() dataResults:TreeNode[]=[];
  @Input() fileContentVariable!: string; // Change String to string
   loading:boolean=true;

  constructor(private cdr: ChangeDetectorRef,private fileUploadService: NodeService,private http: HttpClient) {
    this.dataSource.data=fileData;
  }
  hasChild =(_:number,node:TreeNode)=>!!node.children && node.children.length>0;

  loadData(node: TreeNode) {
    let boolean = true;
    console.log('Content as string:');
    this.fileUploadService.downloadFile(node.name).subscribe(
      response => {
        console.log('  string:', boolean);
          const blob = response.body;
          const reader = new FileReader();
          reader.onload = () => {
            const contentAsString = reader.result as string;
            console.log('Content as string:', contentAsString);
            //set content

             this.fileContentVariable = contentAsString;

            this.loading=false;

          };
          reader.readAsText(blob, 'UTF-8');
        }

    );


  }
  // private highlightCode(): void {
  //   this.highlightService.highlightAuto(this.fileContentVariable, []).subscribe(
  //     result => {
  //       if (result.value != null) {
  //         this.fileContentVariable = result.value;
  //       }
  //       const detectedLanguage = result.language;
  //       console.log('Detected Language:', detectedLanguage);
  //     },
  //     error => {
  //       console.error('Error highlighting code:', error);
  //     }
  //   );
  // }






  getStatus(status:boolean){
    if(status){
   return 'fishier available'
    }
    else {
      return 'fishier pas available'
    }
  }
  deleteFile(i:number){
    this.dataResults.splice(i,1);
    this.dataResults.length==0?this.loading=true :this.loading;
  }

  selectedFolder!: FileList

  onFolderChange(event:any) {
    this.selectedFolder = event.target.files;
  }

  getFolderData() {
    this.fileUploadService.getFolder().subscribe(
      response => {
        console.log('Folder data retrieved successfully:', response);
      },
      error => {
        console.error('Error retrieving folder data:', error);
      }
    );
  }
  // getFolderData() {
  //   this.fileUploadService.getFolder().subscribe(
  //     (response) => {
  //       console.log('Folder data retrieved successfully:', response);
  //       // Assuming the response is an array of files from the server
  //       this.dataSource.data = response.map((file) => ({ name: file, status: true }));
  //     },
  //     (error) => {
  //       console.error('Error retrieving folder data:', error);
  //     }
  //   );
  // }

  IterateFolderToTree() {
  let index=0
    this.fileUploadService.getFolder().pipe(
      map((folder: string | string[]) => {
        if (Array.isArray(folder)) {
          console.log('Files in folder:', folder);

          // Reset the data source
          this.dataSource.data = [];

          // Organize files into a tree structure
          // Organize files into a tree structure
          folder.forEach(filePath => {
            const pathSegments: string[] = filePath.split('/');
            let currentNode: TreeNode | undefined;

            pathSegments.forEach((segment, index) => {
              if (index === 0) {
                // Handle the root node separately
                currentNode = fileData.find(node => node.name === segment);

                if (!currentNode) {
                  // If root node doesn't exist, create it
                  currentNode = { name: segment, status: true, children: [] };
                  fileData.push(currentNode);
                }
              } else {
                // For subsequent segments, check if the node exists
                if (currentNode) {
                  // Find or create the node for the current segment
                  let nextNode = currentNode.children?.find(node => node.name === segment);

                  if (!nextNode) {
                    // If the node doesn't exist, create it
                    nextNode = { name: segment, status: true, children: [] };
                    currentNode.children = currentNode.children || [];
                    currentNode.children.push(nextNode);
                  }

                  // Update the currentNode to the found or created node
                  currentNode = nextNode;
                } else {
                  console.error('Error: currentNode is undefined.');
                }
              }
            });
          });

// Now fileData contains the organized tree structure
          this.dataSource.data = fileData;


          this.cdr.detectChanges();
        } else {
          console.error('Error: getFolder did not return an array of strings');
        }
      })
    ).subscribe(
      () => {},
      error => {
        console.error('Error retrieving folder data:', error);
      }
    );
  }



  uploadFolder() {
    const folder = this.selectedFolder; // Use the selectedFolder variable
    console.log('Files to upload:', folder);

    this.fileUploadService.uploadFile(folder).subscribe(

      response => {
        console.log('Upload successful', response);
      },
      error => {
        console.error('Error uploading folder', error);
      }
    );

  }
}
