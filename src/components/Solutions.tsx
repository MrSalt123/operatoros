'use client';

import AIBrainGraph from "./animations/AIBrainGraph";
import BottleneckTasks from "./animations/BottleneckTasks";
import Chat from "./animations/Chat";
import EvolvingNeuralWeb from "./animations/EvolvingNeuralWeb";
import LeadGenerationResult from "./animations/LeadGenerationResult";
import LoopingTaskStack from "./animations/LoopingTaskStack";
import Spacer from "./Spacer";

export default function ModularAISolutions() {
  return (
    <section className="relative text-white pb-24">

      {/* Top full-width gradient section */}
      <div className="w-full bg-gradient-to-b from-bg-extralight to-background">
        <div className="max-w-6xl mx-auto py-32 px-4 md:px-8">
          <div className="text-left">
            <h2>The OperatorOS Blueprint</h2>
            <Spacer size="xl" />
            <h6 className="text-foreground md:w-1/2">
              <strong>Deploy production-ready AI agents with confidence.</strong>
              <span className="text-muted">
                { } Build upon our scalable infrastructure, enterprise security, and dedicated support.
              </span>
            </h6>
          </div>
        </div>
      </div>
      <Spacer size='xxl' />

      {/* Grid section contained to max-w-6xl */}
      <div className="layout max-w-6xl mx-auto">

        <div className="col-span-4 md:col-span-6 p-4 md:p-8 flex flex-col border-r border-b border-white/10">
          <h4 className="">Diagnose Your Workflow</h4>
          <Spacer size='xs' />
          <span className="text-lg text-[var(--text-muted)] w-3/4">
            We talk with you to understand your business and what could be done better.
          </span>
          <Spacer size='xl' />
          <div className="h-full">
            <Chat />
          </div>
        </div>

        <div className="col-span-4 md:col-start-7 md:col-span-6 p-4 md:p-8 flex flex-col border-b border-white/10">
          <h4 className="">Find the Friction</h4>
          <Spacer size='xs' />
          <span className="text-lg text-[var(--text-muted)] w-3/4">
            We find the friction—the repetitive tasks—and target them for automation.
          </span>
          <Spacer size='xl' />
          <div>
            <BottleneckTasks />
          </div>
        </div>

        <div className="col-span-4 flex flex-row p-4 md:p-8 border-b border-white/10">
          <div className="flex flex-col">
            <h4 className="">Demo Your Future</h4>
            <Spacer size='xs' />
            <span className="text-lg text-[var(--text-muted)]">
              We move from abstract ideas to concrete reality, showing you how your new process will work.
            </span>
          </div>

        </div>

        <div className="col-span-4 md:col-start-5 md:col-span-8 px-8">
          <LeadGenerationResult />
        </div>

        <div className="col-span-4 md:col-span-6 flex flex-col p-4 md:p-8 border-b border-r border-white/10">
          <h4 className="">Create Your Knowledge Core</h4>
          <Spacer size='xs' />
          <span className="text-lg text-[var(--text-muted)] w-3/4">
            We create your proprietary advantage: an AI that knows your business as well as you do.
          </span>
          <Spacer size='xl' />
          <div className="mt-4">
            <AIBrainGraph />
          </div>
        </div>

        <div className="col-span-4 md:col-start-7 md:col-span-6 flex flex-col p-4 md:p-8 border-b border-white/10">
          <h4 className="">Deploy Your AI Workforce</h4>
          <Spacer size='xs' />
          <span className="text-lg text-[var(--text-muted)] w-3/4">
            We deploy a workforce of autonomous agents to execute your tasks, 24/7.
          </span>
          <Spacer size='xl' />
          <div>
            <LoopingTaskStack />
          </div>
        </div>

        <div className="col-span-4 flex flex-row p-4 md:p-8 gap-2">
          <div className="flex flex-col">
            <h4 className="">Your AI Co-Pilot</h4>
            <Spacer size='xs' />
            <span className="text-lg text-[var(--text-muted)]">
              Think of us as your AI co-pilot, adapting your AI&apos;s capabilities as you grow.
            </span>
          </div>
        </div>
        <div className="col-span-4 md:col-start-5 md:col-span-8">
          <EvolvingNeuralWeb />
        </div>
      </div>
    </section>
  );
}
