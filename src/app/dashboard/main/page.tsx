import { SimpleWidget } from "@/components";



export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard',
};


export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1>Pagina principal del dashboard modificado otra vez</h1>
      <span className="text-xl">Informacion general</span>

      <div className="flex flex-wrap items-center justify-center p-2">
        <SimpleWidget/>
      
      </div>

    </div>
  );
}