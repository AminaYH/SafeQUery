import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
export interface TreeNode {
  label: string;
  children?: TreeNode[];
  expanded?: boolean;

}

@Component({
  selector: 'app-tree-item',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './tree-item.component.html',
  styleUrl: './tree-item.component.css'
})
export class TreeItemComponent {
  constructor() { }

  @Input() nodes: TreeNode[] = [];
  @Output() nodeSelected = new EventEmitter<string>();

  toggleNode(node: TreeNode) {
    node.expanded = !node.expanded;
  }

  onNodeSelected(label: string) {
    this.nodeSelected.emit(label);
  }
}
