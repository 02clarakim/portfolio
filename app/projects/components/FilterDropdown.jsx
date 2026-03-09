// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { ChevronDown, Filter, X } from 'lucide-react';
// import { categoryLabels, techStackOptions } from '@/data/projectsData';

// export function FilterDropdown({
//   selectedCategories,
//   selectedTechStack,
//   onCategoryChange,
//   onTechStackChange,
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const activeFiltersCount = selectedCategories.length + selectedTechStack.length;

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const toggleCategory = (category) => {
//     if (selectedCategories.includes(category)) {
//       onCategoryChange(selectedCategories.filter((c) => c !== category));
//     } else {
//       onCategoryChange([...selectedCategories, category]);
//     }
//   };

//   const toggleTechStack = (tech) => {
//     if (selectedTechStack.includes(tech)) {
//       onTechStackChange(selectedTechStack.filter((t) => t !== tech));
//     } else {
//       onTechStackChange([...selectedTechStack, tech]);
//     }
//   };

//   const clearAllFilters = () => {
//     onCategoryChange([]);
//     onTechStackChange([]);
//   };

//   const categoryStyles = {
//     swe: 'border-category-swe text-category-swe bg-category-swe-bg',
//     uiux: 'border-category-uiux text-category-uiux bg-category-uiux-bg',
//     consulting: 'border-category-consulting text-category-consulting bg-category-consulting-bg',
//   };

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 ${
//           isOpen
//             ? 'bg-secondary border-primary/30'
//             : 'bg-card border-border hover:border-primary/20'
//         } ${activeFiltersCount > 0 ? 'pr-3' : ''}`}
//       >
//         <Filter className="w-4 h-4 text-muted-foreground" />
//         <span className="text-sm font-medium text-foreground">Filter</span>
//         {activeFiltersCount > 0 && (
//           <span className="flex items-center justify-center w-5 h-5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
//             {activeFiltersCount}
//           </span>
//         )}
//         <ChevronDown
//           className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
//             isOpen ? 'rotate-180' : ''
//           }`}
//         />
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 top-full mt-2 w-72 bg-popover border border-border rounded-xl dropdown-shadow z-50 animate-fade-in overflow-hidden">
//           {/* Header */}
//           <div className="flex items-center justify-between p-4 border-b border-border">
//             <span className="font-semibold text-foreground">Filters</span>
//             {activeFiltersCount > 0 && (
//               <button
//                 onClick={clearAllFilters}
//                 className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 <X className="w-3 h-3" />
//                 Clear all
//               </button>
//             )}
//           </div>

//           {/* Category Section */}
//           <div className="p-4 border-b border-border">
//             <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
//               Category
//             </h4>
//             <div className="flex flex-col gap-2">
//               {Object.keys(categoryLabels).map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => toggleCategory(category)}
//                   className={`flex items-center justify-between px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
//                     selectedCategories.includes(category)
//                       ? categoryStyles[category]
//                       : 'border-border text-muted-foreground hover:border-primary/20 hover:text-foreground'
//                   }`}
//                 >
//                   {categoryLabels[category]}
//                   {selectedCategories.includes(category) && (
//                     <div className="w-2 h-2 rounded-full bg-current" />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Tech Stack Section */}
//           <div className="p-4">
//             <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
//               Tech Stack
//             </h4>
//             <div className="flex flex-wrap gap-2">
//               {techStackOptions.map((tech) => (
//                 <button
//                   key={tech}
//                   onClick={() => toggleTechStack(tech)}
//                   className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-all duration-200 ${
//                     selectedTechStack.includes(tech)
//                       ? 'bg-primary text-primary-foreground border-primary'
//                       : 'bg-secondary text-secondary-foreground border-transparent hover:border-primary/20'
//                   }`}
//                 >
//                   {tech}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Filter, X } from 'lucide-react';
import { categoryLabels, techStackOptions } from '@/data/projectsData';

export function FilterDropdown({
  selectedCategories,
  selectedTechStack,
  onCategoryChange,
  onTechStackChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeFiltersCount = selectedCategories.length + selectedTechStack.length;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const toggleTechStack = (tech) => {
    if (selectedTechStack.includes(tech)) {
      onTechStackChange(selectedTechStack.filter((t) => t !== tech));
    } else {
      onTechStackChange([...selectedTechStack, tech]);
    }
  };

  const clearAllFilters = () => {
    onCategoryChange([]);
    onTechStackChange([]);
  };

  const categoryStyles = {
    swe: 'border-blue-600 text-blue-700 bg-blue-100',
    uiux: 'border-red-600 text-red-400 bg-red-100',
    consulting: 'border-green-600 text-green-700 bg-green-100',
  };

  return (
    <div className="relative bg-white rounded-xl" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 transition-all duration-200 ${
          isOpen
            ? 'bg-gray-100 border-primary/30'
            : 'bg-card border-border hover:border-primary/20'
        } ${activeFiltersCount > 0 ? 'pr-3' : ''}`}
      >
        <Filter className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">Filter</span>
        {activeFiltersCount > 0 && (
          <span className="flex items-center justify-center w-5 h-5 bg-violet-500 text-white text-xs font-semibold rounded-full">
            {activeFiltersCount}
          </span>
        )}
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute bg-white right-0 top-full mt-2 w-72 bg-popover border border-border border-gray-300 rounded-xl dropdown-shadow z-50 animate-fade-in overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-300 border-border">
            <span className="font-semibold text-foreground">Filters</span>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-3 h-3" />
                Clear all
              </button>
            )}
          </div>

          {/* Category Section */}
          <div className="p-4 border-b border-border border-gray-300">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Category
            </h4>
            <div className="flex flex-col gap-2">
              {Object.keys(categoryLabels).map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                    selectedCategories.includes(category)
                      ? categoryStyles[category]
                      : 'border-border border-gray-300 text-muted-foreground hover:border-primary/20 hover:text-foreground'
                  }`}
                >
                  {categoryLabels[category]}
                  {selectedCategories.includes(category) && (
                    <div className="w-2 h-2 rounded-full bg-current" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="p-4">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStackOptions.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleTechStack(tech)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-all duration-200 ${
                    selectedTechStack.includes(tech)
                      ? 'bg-violet-500 text-white'
                      : 'bg-gray-200/50 text-secondary-foreground border-transparent hover:border-gray-300'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}