import { Component } from '@angular/core';

@Component({
  selector: 'app-price-indicator',
  templateUrl: './price-indicator.component.html',
  styleUrls: ['./price-indicator.component.css']
})
export class PriceIndicatorComponent {
  selectedPriceRange: string = '0-1000'; // Set a default value

  onPriceRangeChange(): void {
    // Access the selected price range using this.selectedPriceRange
    // Perform any necessary logic based on the selected price range
    // For example, you can filter the products, trigger data updates, or emit an event.
  }
}
