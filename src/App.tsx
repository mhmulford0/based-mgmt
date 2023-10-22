import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  return (
    <div className="container mx-auto text-white border h-screen">
      <div className="w-full flex items-center justify-end">
        <ConnectButton
          showBalance={false}
          accountStatus="address"
          chainStatus={"icon"}
        />
      </div>
      <div className="flex flex-col flex-wrap w-full sm:px-6 lg:px-8">
        <div className="">hello</div>
      </div>
    </div>
  );
}

export default App;
