import Link from "next/link";
import { Alert } from "~/components/ui/Alert/Alert";
import { Avatar } from "~/components/ui/Avatar/Avatar";
import { buttonStyles } from "~/components/ui/Button/Button";
import { Icons } from "~/components/ui/Icons";
import { SectionTitle } from "~/components/ui/Title/Title";

export default function Home() {


      const avatars = [
            { src: '/assets/UA1.png', alt: 'Person one', key: '1' },
            { src: '/assets/UA2.png', alt: 'Person two', key: '2' },
            { src: '/assets/UA3.png', alt: 'Person three', key: '3' },
            { src: '/assets/UA4.png', alt: 'Person four', key: '4' },
            { src: '/assets/UA5.png', alt: 'Person five', key: '5' },
            { src: '/assets/UA6.png', alt: 'Person six', key: '6' },
            { src: '/assets/UA7.png', alt: 'Person seven', key: '7' },
            { src: '/assets/UA8.png', alt: 'Person eight', key: '8' }
      ]
      return (
            <main className="">
                  <section className="grid gap-6 md:grid-cols-2 max-w-screen-lg mx-auto">
                        <div className="text-left p-6">

                              <SectionTitle className="mb-5" >Post when your audience is more active.</SectionTitle>

                              <p className="mb-3">With TimeNow, automatically schedule your post on Twitter, Linkedin and Instagram when your follower are most active.</p>

                              <div className="grid grid-cols-2 gap-6 mb-5">
                                    <Link href={'/'} className={buttonStyles('primary')}> Start Scheduling</Link>
                                    <Link href={'/'} className={buttonStyles('secondary')}> View Demo</Link>
                              </div>

                              <Alert icon={<Icons.Shield />} seeMore href="/">TimeNow does not sell data.</Alert>
                        </div>

                        <div className="bg-tn-primary-200 px-8 py-12 relative">
                              <picture>
                                    <img src="assets/Mockup.png" alt="scheduler time now" />
                              </picture>

                              <a href="/" aria-label="Start Scheduler" className="w-1/3 h-1/4 block absolute bottom-8"> </a>
                        </div>
                  </section>

                  <section className="px-6 py-10 grid gap-6 md:grid-cols-2 max-w-screen-lg mx-auto">
                        <div>
                              <SectionTitle as="h2" className="mb-5" >TimeNow is used by the most influential people. </SectionTitle>

                              <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(min(100%,_3rem),_1fr))]">
                                    {avatars.map(avatar => (

                                          <Avatar src={avatar.src} alt={avatar.src} key={avatar.key} />
                                    ))}
                              </div>
                        </div>
                        <div>
                              <p className="mb-6">The most influencer people on Facebook, Twitter and Instagram are using  TweetNow to scheduler post when their follower are most active.</p>
                              <p>The generally receive 23% more engagement than people who do not.</p>
                        </div>



                  </section>

                  <section  className="bg-tn-primary-100 ">
                        <div className="px-6 py-10 grid gap-6 md:grid-cols-2 max-w-screen-lg mx-auto">
                        <div>
                              <SectionTitle as="h2" className="mb-5" >Customizable dashboard for all platforms</SectionTitle>
                              <p className="pb-6">Use Twitter and Instagram but not Linkedin? You can customize you dashboard to you liking.You can even scheduler the same post individual platform instead of all platforms.</p>
                              <Link href={'/'} className={buttonStyles('primary')}> Start Scheduling</Link>
                        </div>

                        <div>
                              <SectionTitle as="h2" className="mb-5" >Real-time data tha tell you everything.</SectionTitle>
                              <p className="pb-6">Get detailed reports of what's working and what isn't.Engagement rates, impressions, views, and much more data is available to your  thought our in-deep dashboard tool.</p>
                              <a href="/" className="font-bold">View live demo</a>
                        </div>
                        </div>
                     
                  </section>
            </main>
      )
}
