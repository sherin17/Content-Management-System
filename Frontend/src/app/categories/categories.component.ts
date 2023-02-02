import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories : any[] = []

  // For storing updated category
  updateCatData = {
    oldName : '',
    Name : ''
  }

  isHidden : boolean = true
  
  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.listCategory()
  }

  // List all categories
  listCategory(){
    this.http.get('http://localhost:3000/categories').subscribe((categories)=>{
      this.categories = JSON.parse(JSON.stringify(categories))
    })
  }

  // Add a category
  addCategory(){
    var category = prompt('Enter new category')

    if(category != null){
      this.http.post('http://localhost:3000/categories',{ category : category }).subscribe((data:any)=>{
        var data = JSON.parse(JSON.stringify(data))
        if(data.status === 'fail'){
          alert(data.message)
        }
        else{
          alert(data.message)
          this.ngOnInit()
        }
      })
    }
  }

  // Make edit category dialog visible
  showEdit(category:any){
    this.http.get('http://localhost:3000/categories/' + category._id).subscribe((category:any)=>{
      this.updateCatData = category
      this.updateCatData.oldName = category.Name
      this.isHidden = false
    })
  }

  // Edit category function
  editCategory(){
    this.http.put('http://localhost:3000/categories', this.updateCatData).subscribe(()=>{
      this.isHidden = true
      alert('Category updated')
      this.ngOnInit()
    })
  }

  // Remove category function
  removeCategory(category:any){
    this.http.delete('http://localhost:3000/categories/'+category._id).subscribe(()=>{
      alert('Category deleted')
      this.ngOnInit()
    })
  }
}