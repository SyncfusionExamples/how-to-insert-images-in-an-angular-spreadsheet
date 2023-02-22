import { Component, ViewChild } from '@angular/core';
import { getCell, getRangeIndexes, SheetModel, SpreadsheetComponent } from 
'@syncfusion/ej2-angular-spreadsheet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  @ViewChild("spreadsheet")
  public ssObj: SpreadsheetComponent|undefined;

  public images = [{src:"https://ej2.syncfusion.com/demos/src/grid/images/6.png",
                    height:150, width:180, top:62, left:50},
                  {src:"https://ej2.syncfusion.com/demos/src/grid/images/1.png",
                    height:150, width:180, top:290, left:50}]

  public btnClick(){
    let rangeIndex = getRangeIndexes("B3")
    let cell = getCell(rangeIndex[0], rangeIndex[1], (this.ssObj?.getActiveSheet() as SheetModel))
    if(cell.image){
      this.ssObj?.deleteImage(cell.image[0].id as string)
    }
  }                  

  public onCreate(){
    this.ssObj?.merge("B2:D2");
    this.ssObj?.merge("B11:D11");
    this.ssObj?.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: "middle", backgroundColor: "#1167b1", color:"#ffffff" }, 'B2');
    this.ssObj?.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: "middle", backgroundColor: "#1167b1", color:"#ffffff" }, 'B11');
    this.ssObj?.setBorder({border: "1px solid #1167b1"}, "B2:D9", "Outer");
    this.ssObj?.setBorder({border: "1px solid #1167b1"}, "B11:D18", "Outer");

    this.ssObj?.insertImage(this.images, "B3");
  }
}
