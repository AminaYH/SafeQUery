import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatTreeModule, MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";

interface TreeNode {
  name: string;
  status: boolean;
  children?: TreeNode[];
}

const fileData: TreeNode[] = [
  {
    name: 'css',
    status: true,
    children: [
      {
        name: 'css',
        status: true,
        children: [
          {
            name: 'css',
            status: true
          }
        ]
      }
    ]
  }, {
    name: 'html',
    status: true,
    children: [
      {
        name: 'csjss',
        status: false
      }
    ]
  },{
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
    NgIf
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent {
  treeControl =new NestedTreeControl<TreeNode>(node =>node.children);
  dataSource =new MatTreeNestedDataSource<TreeNode>();
  @Input() dataResults:TreeNode[]=[];
   loading:boolean=true;
  constructor(private cdr: ChangeDetectorRef) {
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
}
