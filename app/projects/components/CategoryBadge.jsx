// import { categoryLabels } from '@/data/projectsData';

// export function CategoryBadge({ category, className = '' }) {
//   const styles = {
//     swe: 'bg-category-swe-bg text-category-swe',
//     uiux: 'bg-category-uiux-bg text-category-uiux',
//     consulting: 'bg-category-consulting-bg text-category-consulting',
//   };

//   const baseClasses = 'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full';
//   const categoryClass = styles[category] || '';
  
//   return (
//     <span className={`${baseClasses} ${categoryClass} ${className}`.trim()}>
//       {categoryLabels[category]}
//     </span>
//   );
// }
import { categoryLabels } from '@/data/projectsData';

export function CategoryBadge({ category, className = '' }) {
  const styles = {
    swe: 'bg-blue-100 text-blue-700',
    uiux: 'bg-red-100 text-red-400',
    consulting: 'bg-green-100 text-green-700',
  };

  const baseClasses = 'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full';
  const categoryClass = styles[category] || '';
  
  return (
    <span className={`${baseClasses} ${categoryClass} ${className}`.trim()}>
      {categoryLabels[category]}
    </span>
  );
}