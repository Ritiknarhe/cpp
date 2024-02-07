const Table = ({ data }) => {
    return (
        <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8 text-justify">
            

<br /><br />



<div class=" overflow-x-auto">
    <table class="w-full text-m text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <br />
        <tbody>
        {data.map((item) => (
            <tr  key={item.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.first_name}
                </th>
                <td class="px-6 py-4">
                {item.last_name}
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                {item.email}
                </td>
            </tr>
            ))}
            
        </tbody>
    </table>
</div>




            
          </div>
        </div>
      </div>
    );
  };
  
  export default Table;