
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export const menuHeaders=[
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' , submenu: [
        { name: 'Tech', href: '/blog/tech' },
        { name: 'Life', href: '/blog/life' },
        { name: 'Travel', href: '/blog/travel' },
        { name: 'Food', href: '/blog/food' },
        { name: 'Education', href: '/blog/education' },
        { name: 'Entertainment', href: '/blog/entertainment' },
        { name: 'Health', href: '/blog/health' },
        { name: 'Finance', href: '/blog/finance' },
        { name: 'Sports', href: '/blog/sports' },
        { name: 'Fashion', href: '/blog/fashion' },
        { name: 'Politics', href: '/blog/politics' },
        { name: 'Science', href: '/blog/science' },
        { name: 'Environment', href: '/blog/environment' },
        { name: 'Culture', href: '/blog/culture' },
        { name: 'History', href: '/blog/history' },
        { name: 'Business', href: '/blog/business' },
        { name: 'Art', href: '/blog/art' },
        { name: 'Music', href: '/blog/music' },
        { name: 'Movies', href: '/blog/movies' },
        { name: 'Books', href: '/blog/books' },
    ]},
    { name: 'Podcast', href: '/podcast' , submenu: [
        { name: 'Tech', href: '/podcast/tech' },
        { name: 'Life', href: '/podcast/life' },
    ]},
    { name: 'Contact', href: '/contact' },
    {name:'Admin Panel', href:'/adminpanel', submenu:[
        { name: 'Users', href: '/adminpanel/users' },
        { name: 'Blogs', href: '/adminpanel/blogs' },
        { name: 'Podcasts', href: '/adminpanel/podcasts' },
        {name:'create Blog', href:'/adminpanel/createblog'}

    ]}

]