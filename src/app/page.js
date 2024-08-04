import DemoSection from "./components/DemoSection";
import PageHeader from "./components/PageHeader";
import UploadIcon from "./components/UploadIcon";

export default function Home() {
  return (
    <>
      <PageHeader 
        h1Text={'Add Captions To Your Video'} 
        h2Text={'Just Upload Your Video And We Will Do The Rest'} 
      />

      <div className="text-center">
        <button className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50">
        
        <UploadIcon />
        <span>Choose File</span>
        </button>
      </div>
      <DemoSection />
    </>
  );
}
