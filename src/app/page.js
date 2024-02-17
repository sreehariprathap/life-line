import Card from "@/components/Card";
import Footer from "@/components/Footer";
import StepCard from "@/components/StepCard";

export default function Home() {
  return (
    <main className=" flex flex-col gap-10">
      {/* hero  */}
      <div className="flex justify-between px-10 gap-10 items-center">
        <div className="flex flex-col gap-5 items-start">
          <span className="bg-slate-200 px-2 py-1 rounded-xl shadow-lg">
            Health Matters 💗
          </span>
          <h1 className="text-5xl font-bold ">
            Manage your doctor appointments and prescriptions, <br />
            <span className="text-orange-500">all in one place.</span>
          </h1>
          <p className="text-xl">
            Using only your health card, we connect you to your family doctor,
            with whom you can manage appointments, as well as any prescriptions.
          </p>
        </div>
        <div>
          <img src="/hero-img.svg" alt="hero image" />
        </div>
      </div>
      {/* features  */}
      <div className="flex flex-col gap-5 px-10">
        <h1 className="text-xxl font-bold uppercase">Features we Provide</h1>
        <div className="flex flex-wrap gap-5 w-full justify-start">
          <Card
            image={"/icons/icon _Doctor_.png"}
            title={"Making a doctor’s appointment has never been easier"}
            description={
              "Tired of being on hold or never being able to get through to your doctor’s office? We can fix that"
            }
          />
          <Card
            image={"/icons/illustration _Calendar_.png"}
            title={"Easy scheduling"}
            description={
              "Choose a date & time that works for you all online based on availability "
            }
          />
          <Card
            image={"/icons/icon _bell_.png"}
            title={"Timely reminders"}
            description={
              "Never miss an appointment again with notification and email reminders"
            }
          />
          <Card
            image={"/icons/emoji _pill_.png"}
            title={"Manage prescriptions"}
            description={
              "Request to change, refill or cancel any prescriptions"
            }
          />
        </div>
      </div>
      {/* working */}
      <div className="flex flex-col gap-5 px-10">
        <h1 className="text-xxl font-bold uppercase">
          HOW IT WORKS - APPOINTMENTS
        </h1>
        <div className="flex gap-5">
          <StepCard
            image={"/steps/Pexels Photo by cottonbro studio.png"}
            number={1}
            title={"Create an account"}
          />
          <StepCard
            image={"/steps/Pexels Photo by Pixabay.png"}
            number={2}
            title={"Select a date and time that works for you"}
          />
          <StepCard
            image={"/steps/Pexels Photo by Christina Morillo.png"}
            number={3}
            title={
              "Enter a brief explanation of your symptoms/reason for the appointment"
            }
          />
          <StepCard image={""} number={4} title={"You’re all set"} />
        </div>
        <h1 className="text-xxl font-bold uppercase">
          HOW IT WORKS - PRESCRIPTIONS
        </h1>
        <div className="flex gap-5">
          <StepCard
            image={"/steps/Pexels Photo by Polina Tankilevitch.png"}
            number={1}
            title={"Enter reson for prescription change "}
          />
          <StepCard
            image={"/steps/Pexels Photo by Teona Swift.png"}
            number={2}
            title={"Submit the change/refill request"}
          />

          <StepCard
            image={""}
            number={3}
            title={"Wait for your doctor’s approval"}
          />
        </div>
      </div>
      {/* footer  */}
      <Footer />
    </main>
  );
}
