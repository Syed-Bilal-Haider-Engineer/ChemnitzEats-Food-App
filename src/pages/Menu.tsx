import { useMemo, useState } from "react";
import MenuItem from "../components/MenuItem";
import { withQuantityHOC } from "../components/WithQuantity";
import { MENU_ITEMS } from "../data/menu-items";

const MenuItemWithQuantity = withQuantityHOC(MenuItem);

const Menu = () => {
  const [selectedSize, setSelectedSize] = useState<"all" | "small" | "medium" | "large">("all");
  const [maxPrice, setMaxPrice] = useState<number>(50);
  const filteredItems = useMemo(() => {
    let filtered = MENU_ITEMS;
    if (selectedSize !== "all") {
      filtered = filtered.filter((item) => item.size === selectedSize);
    }
    filtered = filtered.filter((item) => item.price <= maxPrice);

    return filtered;
  }, [selectedSize, maxPrice]);

  return (
    <div className="min-h-screen bg-gradient-to-br p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white-800 mb-2">
            Pick what you crave for today
          </h1>
        </div>
        <div className="bg-base-300 rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-white-700 mb-2">
                Size
              </label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value as any)}
                className="w-full px-4 py-2 border border-white-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Sizes</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-white-700 mb-2">
                Max Price: €{maxPrice}
              </label>
              <input
                id="price"
                type="range"
                min={5}
                max={50}
                step={1}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-black-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-white-500 mt-1">
                <span>€5</span>
                <span>€50</span>
              </div>
            </div>
          </div>
          {(selectedSize !== "all" || maxPrice < 50) && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {selectedSize !== "all" && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Size: {selectedSize}
                  <button
                    onClick={() => setSelectedSize("all")}
                    className="ml-2 text-green-600 hover:text-green-800"
                  >
                    ×
                  </button>
                </span>
              )}
              {maxPrice < 50 && (
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                  Max Price: €{maxPrice}
                  <button
                    onClick={() => setMaxPrice(50)}
                    className="ml-2 text-orange-600 hover:text-orange-800"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedSize("all");
                  setMaxPrice(50);
                }}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍕</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No pizzas found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your filters
            </p>
            <button
              onClick={() => {
                setSelectedSize("all");
                setMaxPrice(50);
              }}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div>
            {filteredItems.map((item) => (
             <div className="mb-6" key={item.id}>
               <MenuItemWithQuantity
                key={item.id}
                item={{ ...item }}
              />
             </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
