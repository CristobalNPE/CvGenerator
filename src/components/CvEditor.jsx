import PreviewPage from "./PreviewPage";
import Sidebar from "./Sidebar";
import userData from "../constants/userData";

function CvEditor() {
  return (
    <main className="bg-slate-600 min-h-screen flex">
      <Sidebar />
      <PreviewPage cvInfo={userData} />
    </main>
  );
}

export default CvEditor;
