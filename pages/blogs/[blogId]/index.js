import BlogDetail from "@/components/BlogDetails";
import Head from "next/head";

const blog = {
  title: "Understanding Microinteractions",
  author: "Durga Gairhe",
  authorImage: "/images/durga.png", // Author image
  date: new Date("2020-01-20"),
  category: "User Experience",
  image: "/images/background.png",
  description: `
    Microinteractions are contained product moments that revolve around a single use case – 
    they have one main task. Examples include hitting the “Like” button, filling out a form, 
    pulling down to refresh content, or even more complex user interactions like adjusting 
    a thermostat dial. In this blog, we'll explore how microinteractions are crucial for 
    enhancing user experience and making interfaces feel intuitive and responsive.
     Microinteractions are contained product moments that revolve around a single use case – 
    they have one main task. Examples include hitting the “Like” button, filling out a form, 
    pulling down to refresh content, or even more complex user interactions like adjusting 
    a thermostat dial. In this blog, we'll explore how microinteractions are crucial for 
    enhancing user experience and making interfaces feel intuitive and responsive.
     Microinteractions are contained product moments that revolve around a single use case – 
    they have one main task. Examples include hitting the “Like” button, filling out a form, 
    pulling down to refresh content, or even more complex user interactions like adjusting 
    a thermostat dial. In this blog, we'll explore how microinteractions are crucial for 
    enhancing user experience and making interfaces feel intuitive and responsive.
     Microinteractions are contained product moments that revolve around a single use case – 
    they have one main task. Examples include hitting the “Like” button, filling out a form, 
    pulling down to refresh content, or even more complex user interactions like adjusting 
    a thermostat dial. In this blog, we'll explore how microinteractions are crucial for 
    enhancing user experience and making interfaces feel intuitive and responsive.
     Microinteractions are contained product moments that revolve around a single use case – 
    they have one main task. Examples include hitting the “Like” button, filling out a form, 
    pulling down to refresh content, or even more complex user interactions like adjusting 
    a thermostat dial. In this blog, we'll explore how microinteractions are crucial for 
    enhancing user experience and making interfaces feel intuitive and responsive.
     Microinteractions are contained product moments that revolve around a single use case – 
    they have one main task. Examples include hitting the “Like” button, filling out a form, 
    pulling down to refresh content, or even more complex user interactions like adjusting 
    a thermostat dial. In this blog, we'll explore how microinteractions are crucial for 
    enhancing user experience and making interfaces feel intuitive and responsive.
     Microinteractions are contained product moments that revolve around a single use case – 
    they have one main task. Examples include hitting the “Like” button, filling out a form, 
    pulling down to refresh content, or even more complex user interactions like adjusting 
    a thermostat dial. In this blog, we'll explore how microinteractions are crucial for 
    enhancing user experience and making interfaces feel intuitive and responsive.
    
  `,
};

export default function Blogs() {
  //   console.log("blogData", blogData);
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={"Lost's of projects"} />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
      <BlogDetail blog={blog} />
    </>
  );
}
