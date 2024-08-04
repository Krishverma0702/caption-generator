import DemoSection from "./components/DemoSection";
import PageHeader from "./components/PageHeader";
import UploadForm from "./components/UploadForm";


export default function Home() {
  
  return (
    <>
      <PageHeader 
        h1Text={'Add Captions To Your Video'} 
        h2Text={'Just Upload Your Video And We Will Do The Rest'} 
      />

      <div className="text-center">
        <UploadForm />
      </div>
      <DemoSection />
    </>
  );
}
