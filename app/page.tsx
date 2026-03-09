import Image from "next/image";
import Button from "@/components/Button";
import FeatureItem from "@/components/FeatureItem";
import StatRow from "@/components/StatRow";

export default function Home() {
  return (
    <main className="bg-background w-full ">
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1170px]  mx-auto flex flex-col items-center gap-12">
          <div className="text-center max-w-[536px]">
            <h2>What makes us different makes them stronger</h2>
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-[30px]">
            <div className="flex flex-col gap-8 sm:gap-[80px] sm:items-end items-center order-2 sm:order-1">
              <FeatureItem
                icon={
                  <Image
                    src="/images/food-icon.svg"
                    alt="Real Food"
                    width={60}
                    height={60}
                  />
                }
                title="Real Food"
                description="Wholesome recipes for dogs with real meat and veggies."
              />
              <FeatureItem
                icon={
                  <Image
                    src="/images/bow-icon.svg"
                    alt="Made Fresh"
                    width={60}
                    height={60}
                  />
                }
                title="Premium Ingredient"
                description="Elevating pet care with unmatched safety and quality."
              />
            </div>

            <div className="shrink-0 w-52 h-52 sm:w-[370px] sm:h-[370px] rounded-full overflow-hidden relative order-1 sm:order-2">
              <Image
                src="/images/food-plate.svg"
                alt="Dog food plate with fresh ingredients"
                width={370}
                height={370}
                // className="object-contain"
                className="w-full"
                priority
              />
            </div>

            <div className="flex flex-col gap-8  sm:gap-[80px] sm:items-start items-center  order-3">
              <FeatureItem
                icon={
                  <Image
                    src="/images/milk-icon.svg"
                    alt="Premium Ingredient"
                    width={60}
                    height={60}
                  />
                }
                title="Made Fresh"
                description="We prioritize maintaining the integrity of whole foods and nutrition."
                align="right"
              />
              <FeatureItem
                icon={
                  <Image
                    src="/images/vet-icon.svg"
                    alt="Vet Developed"
                    width={60}
                    height={60}
                  />
                }
                title="Vet Developed"
                description="We raise the bar for dog nutrition, surpassing industry expectations."
                align="right"
              />
            </div>
          </div>

          <div className="flex flex-col items-center  gap-4 w-full max-w-[562px]">
            <Button className="w-full">
              Get your dog&apos;s healthy meal today!
            </Button>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-between">
              <p className="flex-1 text-[13px]! flex items-center justify-center gap-2 whitespace-nowrap">
                <Image
                  src="/images/shield-check.svg"
                  alt="Shield check"
                  width={16}
                  height={16}
                />
                30-day money back guarantee
              </p>
              <Image
                src="/images/payments.svg"
                alt="Accepted payment methods"
                width={228}
                height={24}
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1170px] mx-auto flex flex-col sm:flex-row items-start gap-[30px]">
          <div className="flex-1 h-full  flex flex-col gap-4 sm:pr-8">
            <h2>
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>
            <p>
              Invest in your dog&apos;s future with our scientifically
              formulated superfood-powered supplements. Give them the nutrition
              they deserve and watch them thrive with vitality, energy, and the
              joy of a longer, healthier life.
            </p>

            <div className="flex flex-col gap-4 sm:mt-[32px] sm:mb-[12px]">
              <p className=" font-semibold text-sm sm:text-[29px] text-text">
                Key Points:
              </p>
              <div className="flex flex-col gap-3 divide-y divide-[#E3E3E8]">
                <StatRow
                  percent="97%"
                  description="Dogs choose our dog feed over leading brands because of its real functional ingredients and delicious flavor."
                />
                <StatRow
                  percent="84%"
                  description="Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption."
                />
                <StatRow
                  percent="92%"
                  description="Our dog food's high protein and fat digestibility contribute to ideal stool quality."
                />
              </div>
            </div>

            <Button className="max-sm:w-[300px] max-sm:mx-auto">
              Give your furry friend the gift of wholesome nutrition
            </Button>
          </div>

          <div className="flex-1 w-full h-full  relative">
            <Image
              src="/images/happy-dog-one.png"
              alt="Happy dog with Happy Dog Bites product"
              width={570}
              height={570}
              className="object-cover w-full h-full !rounded-[10px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-[80px] px-4 sm:px-8">
        <div className="max-w-[1170px] mx-auto flex flex-col sm:flex-row items-center gap-[30px]">
          <div className="flex-1 w-full h-full  relative">
            <Image
              src="/images/happy-dog-two.png"
              alt="Two dachshunds eating from bowls"
              width={570}
              height={480}
              className="object-cover w-full h-full !rounded-[10px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4  sm:pl-[32px]">
            <h2>
              Improve overall gastrointestinal health for better nutrient
              absorption
            </h2>
            <p>
              Through rigorous scientific studies and consultations with
              veterinarians, we have created a breakthrough formula exclusively
              tailored to combat the health challenges prevalent in dogs. A
              staggering 91% of our customers have reported significant
              improvements in their dogs&apos; health after incorporating our
              product into their diet.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-[80px] px-4 sm:px-8">
        <div className="max-w-[1170px] mx-auto flex flex-col-reverse sm:flex-row items-center gap-[30px]">
          <div className="flex-1 flex flex-col gap-4 sm:pr-[32px]">
            <h2>
              Prebiotics nourish the beneficial gut bacteria, supporting
              digestive health
            </h2>
            <p>
              Our dog food formula contains carefully selected prebiotics that
              work in harmony with the gut microbiota, providing the necessary
              nutrients for the growth and maintenance of beneficial bacteria,
              ultimately supporting digestive health.
            </p>
          </div>

          <div className="flex-1 w-full max-w-[570px] relative">
            <Image
              src="/images/seeds.png"
              alt="Close up of nutritious dog food kibble"
              width={570}
              height={480}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
