import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavMenuItem from './navigation/NavMenuItem';
import SubMenuSection from './navigation/SubMenuSection';

const MainNavbar = () => {
  return (
    <div className="absolute w-full z-20 text-center lg:top-[160px] top-[120px] px-4 font-['WomanFontBold']">
      <NavigationMenu className="mx-auto max-w-screen-2xl">
        <NavigationMenuList className="flex flex-col lg:flex-row lg:gap-14 gap-6 items-center">
          
          <NavMenuItem title="Le monde Fiori" image="/Articles/1.png">
            <div className="grid grid-cols-2 gap-3">
              <SubMenuSection
                title="Collections"
                items={[
                  {
                    href: "/category/le-monde-fiori/spring",
                    title: "Spring Collection",
                    description: "Discover our fresh spring designs"
                  },
                  {
                    href: "/category/le-monde-fiori/summer",
                    title: "Summer Collection",
                    description: "Light and breezy summer styles"
                  }
                ]}
              />
              <SubMenuSection
                title="Occasions"
                items={[
                  {
                    href: "/category/le-monde-fiori/wedding",
                    title: "Wedding",
                    description: "Elegant wedding collections"
                  },
                  {
                    href: "/category/le-monde-fiori/party",
                    title: "Party",
                    description: "Festive party designs"
                  }
                ]}
              />
            </div>
          </NavMenuItem>

          <NavMenuItem title="L'univers Cadeaux" image="/Articles/2.png">
            <div className="grid grid-cols-2 gap-3">
              <SubMenuSection
                title="Gift Types"
                items={[
                  {
                    href: "/category/univers-cadeaux/personalized",
                    title: "Personalized Gifts",
                    description: "Custom-made special presents"
                  },
                  {
                    href: "/category/univers-cadeaux/corporate",
                    title: "Corporate Gifts",
                    description: "Professional gift solutions"
                  }
                ]}
              />
              <SubMenuSection
                title="Special Occasions"
                items={[
                  {
                    href: "/category/univers-cadeaux/birthday",
                    title: "Birthday",
                    description: "Celebrate with unique gifts"
                  },
                  {
                    href: "/category/univers-cadeaux/anniversary",
                    title: "Anniversary",
                    description: "Memorable anniversary presents"
                  }
                ]}
              />
            </div>
          </NavMenuItem>

          <NavMenuItem title="Le prêt à porter" image="/Articles/3.png">
            <div className="grid grid-cols-2 gap-3">
              <SubMenuSection
                title="Categories"
                items={[
                  {
                    href: "/category/pret-a-porter/dresses",
                    title: "Dresses",
                    description: "Elegant dresses for all occasions"
                  },
                  {
                    href: "/category/pret-a-porter/tops",
                    title: "Tops",
                    description: "Stylish tops and blouses"
                  }
                ]}
              />
              <SubMenuSection
                title="Collections"
                items={[
                  {
                    href: "/category/pret-a-porter/casual",
                    title: "Casual Wear",
                    description: "Comfortable daily fashion"
                  },
                  {
                    href: "/category/pret-a-porter/evening",
                    title: "Evening Wear",
                    description: "Stunning evening attire"
                  }
                ]}
              />
            </div>
          </NavMenuItem>

          <NavMenuItem title="Accessoires" image="/Articles/4.png">
            <div className="grid grid-cols-2 gap-3">
              <SubMenuSection
                title="Jewelry"
                items={[
                  {
                    href: "/category/accessoires/necklaces",
                    title: "Necklaces",
                    description: "Elegant necklace collection"
                  },
                  {
                    href: "/category/accessoires/earrings",
                    title: "Earrings",
                    description: "Beautiful earring designs"
                  }
                ]}
              />
              <SubMenuSection
                title="Other Accessories"
                items={[
                  {
                    href: "/category/accessoires/bags",
                    title: "Bags",
                    description: "Stylish bags and purses"
                  },
                  {
                    href: "/category/accessoires/scarves",
                    title: "Scarves",
                    description: "Luxurious scarves collection"
                  }
                ]}
              />
            </div>
          </NavMenuItem>

          <NavMenuItem title="Sur mesure" image="/NewCollection/Main.png">
            <div className="grid grid-cols-2 gap-3">
              <SubMenuSection
                title="Services"
                items={[
                  {
                    href: "/category/sur-mesure/consultation",
                    title: "Consultation",
                    description: "Personal styling consultation"
                  },
                  {
                    href: "/category/sur-mesure/fitting",
                    title: "Fitting",
                    description: "Professional fitting service"
                  }
                ]}
              />
              <SubMenuSection
                title="Custom Items"
                items={[
                  {
                    href: "/category/sur-mesure/dresses",
                    title: "Custom Dresses",
                    description: "Tailored dress creation"
                  },
                  {
                    href: "/category/sur-mesure/suits",
                    title: "Custom Suits",
                    description: "Bespoke suit tailoring"
                  }
                ]}
              />
            </div>
          </NavMenuItem>

          <NavMenuItem title="Outlet" image="/NewCollection/Together We Feast.png">
            <div className="grid grid-cols-2 gap-3">
              <SubMenuSection
                title="Seasonal Sales"
                items={[
                  {
                    href: "/category/outlet/summer-sale",
                    title: "Summer Sale",
                    description: "Hot summer deals"
                  },
                  {
                    href: "/category/outlet/winter-sale",
                    title: "Winter Sale",
                    description: "Winter collection clearance"
                  }
                ]}
              />
              <SubMenuSection
                title="Special Offers"
                items={[
                  {
                    href: "/category/outlet/clearance",
                    title: "Clearance",
                    description: "Final clearance items"
                  },
                  {
                    href: "/category/outlet/special-deals",
                    title: "Special Deals",
                    description: "Limited time offers"
                  }
                ]}
              />
            </div>
          </NavMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainNavbar;