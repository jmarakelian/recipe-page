import './App.css'
import omelette from './assets/image-omelette.jpeg';

const nutrition = [
    {name: "Calories", value: "277kcal"},
    {name: "Carbs", value: "0g"},
    {name: "Protein", value: "20g"},
    {name: "Fat", value: "22g"}
]

function App() {
  return (
      <div className="bg-white px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
              <img
                  alt=""
                  src={omelette}
                  className="aspect-video rounded-xl bg-gray-50 object-cover"
              />
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-pretty text-left text-gray-900 sm:text-5xl">
                  Simple Omelette Recipe
              </h1>

              <div className="mt-4 max-w-2xl text-gray-600">
                  <p className="text-left">
                      An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                  </p>
                  <div className="mt-4 ml-6 overflow-hidden rounded-lg bg-rose-50 shadow-sm">
                      <div className="px-4 py-5 sm:p-6">
                          <h2 className="text-2xl font-semibold tracking-tight text-pretty text-rose-800 text-left">
                              Preparation Time
                          </h2>
                          <ul className="list-disc px-6 py-2 text-left">
                              <li>
                                  <b>Total:</b> Approximately 10 minutes
                              </li>
                              <li>
                                  <b>Preparation:</b> 5 minutes
                              </li>
                              <li>
                                  <b>Cooking:</b> 5 minutes
                              </li>
                          </ul>
                      </div>
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-pretty text-brown-800 text-left">
                      Ingredients
                  </h2>
                  <ul className="list-disc px-4 text-left pt-2 pb-2 ml-4">
                      <li>
                          2-3 large eggs
                      </li>
                      <li>
                          Salt, to taste
                      </li>
                      <li>
                          Pepper, to taste
                      </li>
                      <li>
                          1 tablespoon of butter or oil
                      </li>
                      <li>
                          Optional fillings: cheese, diced vegetables, cooked meats, herbs
                      </li>
                  </ul>
              </div>

              <div className="relative pt-6 pb-2">
                  <div aria-hidden="true" className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                  </div>
              </div>

              <div className="max-w-2xl text-gray-600">
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-pretty text-brown-800 text-left">
                      Nutrition
                  </h2>
                  <ul className="list-decimal px-4 text-left pt-2 pb-2 ml-4">
                      <li className="list-marker-brown-800">
                          <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                      </li>
                      <li className="list-marker-brown-800">
                          <b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.
                      </li>
                      <li className="list-marker-brown-800">
                          <b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                      </li>
                      <li className="list-marker-brown-800">
                          <b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
                      </li>
                      <li className="list-marker-brown-800">
                          <b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
                      </li>
                      <li className="list-marker-brown-800">
                          <b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.
                      </li>
                  </ul>
              </div>

              <div className="relative pt-6 pb-2">
                  <div aria-hidden="true" className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                  </div>
              </div>

              <div className="max-w-2xl text-gray-600">
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-pretty text-brown-800 text-left">
                      Nutrition
                  </h2>
                  <p className="text-left">
                      The table below shows nutritional values per serving without the additional fillings.
                  </p>
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                          <tbody className="divide-y divide-gray-200">
                            {nutrition.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 text-left">{item.name}</td>
                                    <td className="px-3 py-4 text-sm whitespace-nowrap text-brown-800 text-left">{item.value}</td>
                                </tr>
                            ))}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default App
