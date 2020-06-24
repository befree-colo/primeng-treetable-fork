@NgModule({
  imports: [CommonModule, PaginatorModule, ScrollingModule],
  exports: [
    TreeTable,
    SharedModule,
    TreeTableToggler,
    TTSortableColumn,
    TTSortIcon,
    TTResizableColumn,
    TTRow,
    TTReorderableColumn,
    TTSelectableRow,
    TTSelectableRowDblClick,
    TTContextMenuRow,
    TTCheckbox,
    TTHeaderCheckbox,
    TTEditableColumn,
    TreeTableCellEditor,
    ScrollingModule
  ],
  declarations: [
    TreeTable,
    TreeTableToggler,
    TTScrollableView,
    TTBody,
    TTSortableColumn,
    TTSortIcon,
    TTResizableColumn,
    TTRow,
    TTReorderableColumn,
    TTSelectableRow,
    TTSelectableRowDblClick,
    TTContextMenuRow,
    TTCheckbox,
    TTHeaderCheckbox,
    TTEditableColumn,
    TreeTableCellEditor
  ]
})
export class TreeTableModule {}
