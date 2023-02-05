import React, { useState } from "react";
import { datas, mealImgs } from "./data";
const App = () => {
  const [meals, setMeals] = useState(datas);

  const [form, setForm] = useState({
    name: "",
    price: "",
    mealImgId: mealImgs[0].id,
  });

  const debouncedName = useDebounceValue(form.name);

  useEffect(() => {
    console.log("debouncedName", debouncedName);
  }, [debouncedName]);

  useEffect(() => {
    const totalPrice = meals.reduce((total, meal) => total + meal.price, 0);
    document.title = `目前總金額為 ${totalPrice} 元`;
  }, [meals]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleAddMeal = (e) => {
    e.preventDefault();

    setMeals((preMeals) => {
      let newMeal = {
        id: preMeals[preMeals.length - 1].id + 1,
        name: form.name,
        price: form.price ? parseInt(form.price, 10) : 0,
        url: null,
      };

      let foundMealImg = mealImgs.find(
        (mealImg) => mealImg.id === parseInt(form.mealImgId, 10)
      );

      if (foundMealImg) {
        newMeal.url = foundMealImg.url;
      }

      return [...preMeals, newMeal];
    });

    setForm({
      name: "",
      price: "",
      mealImgId: 1,
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <h1>新增餐點</h1>
        <form onSubmit={handleAddMeal}>
          <p>
            <label>名稱</label>
            <input name="name" value={form.name} onChange={handleFormChange} />
          </p>
          <p>
            <label>餐點圖片</label>
            <select
              name="mealImgId"
              value={form.mealImgId}
              onChange={handleFormChange}
            >
              {mealImgs.map((mealImg) => (
                <option key={mealImg.id} value={mealImg.id}>
                  {mealImg.name}
                </option>
              ))}
            </select>
          </p>
          <p>
            <label>價格</label>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleFormChange}
            />
          </p>
          <p>
            <input type="submit" value="Add Meal" />
          </p>
        </form>
      </div>
      <div>
        <h1>餐點清單</h1>
        {meals.map((meal) => (
          <div key={meal.id}>
            {meal.name} | $ {meal.price}
            <div>
              <img src={meal.url} width="100" alt="meal-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
