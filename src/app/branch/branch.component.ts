import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent {
  branchArr: any[] = [];
  branch: any = {
    branchId: 0,
    branchName: '',
    DOB: '',
    Salary: '',
    joiningDate: '',
    relievingDate: '',
    contact: '',
    status :''
  };

  constructor() {}

  ngOnInit(): void {
    const localData = localStorage.getItem('branchList');
    if (localData != null) {
      this.branchArr = JSON.parse(localData);
    }
  }
  onAddbranch() {
    const notNull = document.getElementById('exampleModal');
    const isSelected:boolean=true;
    if (notNull != null) {
      notNull.style.display = 'block';
    }
      this.branch = {
      branchId: 0,
      branchName: '',
      DOB: '',
      Salary: '',
      joiningDate: '',
      relievingDate: '',
      contact: '',
      status: '',
    };
  }
  onCloseModel() {
    const notNull = document.getElementById('exampleModal');
    if (notNull != null) {
      notNull.style.display = 'none';
    }
  }
  onDelete(branchId: number) {
    for (let i = 0; i < this.branchArr.length; i++) {
      if (this.branchArr[i].branchId == branchId) {
        this.branchArr.splice(i, 1);
      }
    }
    localStorage.setItem('branchList', JSON.stringify(this.branchArr));
  }
  onEdit(bran: any) {
    this.onAddbranch();
    this.branch = bran;
  }
  onUpdate() {
    const record = this.branchArr.find(
      (m) => m.branchId == this.branch.branchId
    );
    record.fullname = this.branch.fullname;
    localStorage.setItem('branchList', JSON.stringify(this.branchArr));
    this.onCloseModel();
  }
  savebranch(data: any) {
    this.branch.branchId = this.branchArr.length + 1;
    this.branchArr.push(this.branch);
    localStorage.setItem('branchList', JSON.stringify(this.branchArr));
    this.branch = {
      branchId: 0,
      branchName: '',
      DOB: '',
      Salary: '',
      joiningDate: '',
      relievingDate: '',
      contact: '',
      status: '',
    };
  }
}
