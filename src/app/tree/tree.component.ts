import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatTreeModule, MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import { HttpClientModule,HttpClient } from '@angular/common/http';

import {TreeNode}from "../interfaces/node";
import {NodeService} from "../../services/node.service";

const fileData: TreeNode[] = [
  {
    name: 'css',
    status: true,
    children: [
      {
        name: 'css',
        status: true
      }
    ]
  },
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
    NgIf,
  ],
  providers:[HttpClientModule,NodeService],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent {
  treeControl =new NestedTreeControl<TreeNode>(node =>node.children);
  dataSource =new MatTreeNestedDataSource<TreeNode>();
  @Input() dataResults:TreeNode[]=[];
   loading:boolean=true;

  constructor(private cdr: ChangeDetectorRef,private fileUploadService: NodeService,private http: HttpClient) {
    this.dataSource.data=fileData;
  }
  hasChild =(_:number,node:TreeNode)=>!!node.children && node.children.length>0;
  loadData(node: TreeNode) {

    this.dataResults.push({ name: node.name, status: node.status });
    console.log('dataResults:', this.dataResults);
    this.dataResults.length > 0 ? (this.loading = false) : (this.loading = true);

  }

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
