import Link from "next/link";
import { Alert } from "~/components/ui/Alert/Alert";
import { buttonStyles } from "~/components/ui/Button/Button";
import { Icons } from "~/components/ui/Icons";
import { SectionTitle } from "~/components/ui/Title/Title";

export default function Home () {
  return (
      <main className="">
            <div className="text-left p-6">

                  <SectionTitle className="mb-5" >Post when your audience is more active.</SectionTitle>

                  <p className="mb-3">With TimeNow, automatically schedule your post on Twitter, Linkedin and Instagram when your follower are most active.</p>

                  <div className="grid grid-cols-2 gap-6 mb-5">
                        <Link href={'/'} className={buttonStyles('primary')}> Start Scheduling</Link> 
                        <Link href={'/'}  className={buttonStyles('secondary')}> View Demo</Link>
                  </div>

                  <Alert icon={<Icons.CheckMark/>} seeMore href="/">TimeNow does not sell data.</Alert>
            </div>
          <div className='w-full h-20 bg-tn-primary-100 font-thin'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aspernatur fugiat consectetur! Eum inventore facilis delectus quidem natus perferendis quibusdam at, laudantium optio in magnam nesciunt fugiat ut enim. Dolores!
          </div>
          <div className='w-full h-20 bg-tn-primary-200 font-extralight'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at delectus voluptatibus, animi quam quibusdam dicta neque nam obcaecati asperiores, id voluptas hic maxime quis mollitia eos inventore corrupti cum.
          </div>
          <div className='w-full h-20 bg-tn-primary-300 font-light'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at delectus voluptatibus, animi quam quibusdam dicta neque nam obcaecati asperiores, id voluptas hic maxime quis mollitia eos inventore corrupti cum.
          </div>

          <div className='w-full h-20 bg-tn-primary-500 font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at delectus voluptatibus, animi quam quibusdam dicta neque nam obcaecati asperiores, id voluptas hic maxime quis mollitia eos inventore corrupti cum.
          </div>

          <div className='w-full h-20 bg-tn-neutral-000 font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at delectus voluptatibus, animi quam quibusdam dicta neque nam obcaecati asperiores, id voluptas hic maxime quis mollitia eos inventore corrupti cum.
          </div>
          <div className='w-full h-20 bg-tn-neutral-500 font-bold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at delectus voluptatibus, animi quam quibusdam dicta neque nam obcaecati asperiores, id voluptas hic maxime quis mollitia eos inventore corrupti cum.
          </div>

          <div className='w-full h-20 bg-tn-neutral-900 text-white border-tn-neutral-000 border font-extrabold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at delectus voluptatibus, animi quam quibusdam dicta neque nam obcaecati asperiores, id voluptas hic maxime quis mollitia eos inventore corrupti cum.
          </div>

          <div className='w-full h-20 bg-tn-neutral-900 text-white border-tn-neutral-000 border font-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at delectus voluptatibus, animi quam quibusdam dicta neque nam obcaecati asperiores, id voluptas hic maxime quis mollitia eos inventore corrupti cum.
          </div>
      </main>
  )
}
