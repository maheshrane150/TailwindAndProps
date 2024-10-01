export default function Card (props) {
    return(
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-950">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg text-white font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-50 dark:text-sky-50">
        {props.username}
      </div>
      <div className="text-slate-100 dark:text-slate-100">
       {props.designation}
      </div>
      <div className="text-sky-50 dark:text-sky-50">
        {props.salary}
      </div>
    </figcaption>
  </div>
</figure>
)
}