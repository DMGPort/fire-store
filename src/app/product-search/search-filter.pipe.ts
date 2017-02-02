import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../_models/product';
import { MyDataService } from '../_services/mydata.service';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{

    constructor(
        private myDataService: MyDataService
    ){}

    transform(products: any, searchTerm: string){
        if(searchTerm === undefined || searchTerm == "") return null;
        return this.myDataService.searchArray.filter(function(product){
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
    }
}