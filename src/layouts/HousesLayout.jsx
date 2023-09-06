import { Outlet } from "react-router-dom";

export default function RootLayout() {

  return (
    <div className="houses-layout" >
      <h1>houses-layout</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
