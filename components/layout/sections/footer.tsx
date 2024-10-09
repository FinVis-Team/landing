import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
export const FooterSection = () => {
  return (
    <Container>
    <footer id="footer" className="container py-12 sm:py-24">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-4">
            <Link href="#" className="flex font-bold items-center">
              <Image
                src="/favicon.png"
                alt="Finators Logo"
                width={32}
                height={32}
                className="mr-2 rounded-lg"
                  />
              <h3 className="text-2xl">Finators</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 hover:text-primary relative after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-center">
                Github
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 hover:text-primary relative after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-center">
                Twitter
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 hover:text-primary relative after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-center">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 hover:text-primary relative after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-center">
                Feedback
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024

          </h3>
        </section>
      </div>
    </footer>
    </Container>
  );
};
