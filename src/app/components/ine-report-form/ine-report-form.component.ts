import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper,Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-ine-report-form',
  templateUrl: './ine-report-form.component.html',
  styleUrls: ['./ine-report-form.component.css']
})
export class IneReportFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public generateTestPDF(){
    const pdf = new PdfMakeWrapper();

    pdf.add(
      new Txt('Hello world').bold().italics().end
    );

    pdf.create().open();
  }
  

}
