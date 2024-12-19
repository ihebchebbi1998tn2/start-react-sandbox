import React from 'react';
import { ListItem } from './ListItem';

interface SubMenuSectionProps {
  title: string;
  items: Array<{
    href: string;
    title: string;
    description: string;
  }>;
}

const SubMenuSection = ({ title, items }: SubMenuSectionProps) => {
  return (
    <div>
      <h4 className="text-lg font-medium leading-none mb-3 text-[#700100] text-left">{title}</h4>
      <ul className="grid gap-3 pl-0">
        {items.map((item) => (
          <ListItem 
            key={item.href}
            href={item.href}
            title={item.title}
          >
            {item.description}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default SubMenuSection;