import paul from "../assets/years38.png";

const Employees = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 py-8 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 pb-16">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={paul}
            alt="ff"
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
          <h3 className="mt-4 text-sm text-gray-700">name</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">ddddd</p>
        </div>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={paul}
            alt="ff"
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
          <h3 className="mt-4 text-sm text-gray-700">name</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">ddddd</p>
        </div>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={paul}
            alt="ff"
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
          <h3 className="mt-4 text-sm text-gray-700">name</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">ddddd</p>
        </div>
      </div>
      <button className="p-4 bg-accent rounded-sm text-white mx-auto block">
        Se alle mæglere
      </button>
    </div>
  );
};

export default Employees;
