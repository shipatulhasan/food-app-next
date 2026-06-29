import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { getCategories } from '@/app/services/category.service'
import Image from 'next/image'
import { Phone } from 'lucide-react'

export default async function Navbar() {
  const categories = await getCategories()
  return (
    <div className='border-y'>
      <div className='container mx-auto flex items-center justify-between'>
        <NavigationMenu>
          <NavigationMenuList>
            {/* All Categories */}
            <NavigationMenuItem className={'cursor-pointer'}>
              <NavigationMenuTrigger>All Categories</NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className='grid w-auto grid-cols-4 gap-4 p-5'>
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.id}`}
                      className='flex items-center gap-3 rounded-lg p-3 hover:bg-accent'>
                      <Image
                        src={category.categoryImg}
                        alt={category.categoryName}
                        width={60}
                        height={60}
                        className='rounded-full w-16 h-auto'
                      />

                      <span className='font-medium'>
                        {category.categoryName}
                      </span>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href='/'>Home</Link>}></NavigationMenuLink>
            </NavigationMenuItem>

            {/* Shop */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className='w-62.5 p-2'>
                  <ListItem href='/shop' title='All Products'>
                    Browse all products
                  </ListItem>

                  <ListItem href='/featured' title='Featured'>
                    Featured products
                  </ListItem>

                  <ListItem href='/popular' title='Popular'>
                    Popular products
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={
                  <Link href='/contact'>Contact Us</Link>
                }></NavigationMenuLink>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href='/about'>About</Link>}
              />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center gap-2 ">
            <span className="flex items-center gap-2 text-gray-900">
              <Phone className="w-5" /> (+880) 2-5881/2345
            </span>
          </div>
      </div>
    </div>
  )
}

type Props = React.ComponentPropsWithoutRef<'li'> & {
  href: string
  title: string
}

function ListItem({ title, children, href, ...props }: Props) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link
            href={href}
            className='block space-y-1 rounded-md p-3 hover:bg-accent'>
            <div className='font-medium'>{title}</div>

            <p className='line-clamp-2 text-sm text-muted-foreground'>
              {children}
            </p>
          </Link>
        }
      />
    </li>
  )
}
