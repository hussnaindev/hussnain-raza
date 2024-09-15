import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Separator } from "./ui/separator"
  
const Navbar = () => {
  return (
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <Separator orientation="vertical"/>
  <MenubarMenu>
    <MenubarTrigger>Skills</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <Separator orientation="vertical"/>
  <MenubarMenu>
    <MenubarTrigger>Projects</MenubarTrigger>
    <MenubarContent>
    </MenubarContent>
  </MenubarMenu>
  <Separator orientation="vertical"/>
  <MenubarMenu>
    <MenubarTrigger>Experience</MenubarTrigger>
    <MenubarContent>
    </MenubarContent>
  </MenubarMenu>
  <Separator orientation="vertical"/>
  <MenubarMenu>
    <MenubarTrigger>Contact</MenubarTrigger>
    <MenubarContent>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

  )
}

export default Navbar
