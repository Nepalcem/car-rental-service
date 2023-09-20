import React from "react";
import { useFormik } from "formik";
import { brands, prices } from "../../utils/carBrandsPrices";

export default function FilterComponent() {
  const formik = useFormik({
    initialValues: {
      brand: "",
      price: "",
      mileageFrom: "",
      mileageTo: "",
    },
    onSubmit: (values) => {
      // Handle the form submission logic here
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="brand">Car Brand:</label>
        <select
          id="brand"
          name="brand"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.brand}
        >
          <option value="">Select a brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="price">Price per Hour:</label>
        <select
          id="price"
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        >
          <option value="">Select a price</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mileageFrom">Mileage From:</label>
        <input
          id="mileageFrom"
          name="mileageFrom"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mileageFrom}
        />
      </div>

      <div>
        <label htmlFor="mileageTo">Mileage To:</label>
        <input
          id="mileageTo"
          name="mileageTo"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mileageTo}
        />
      </div>

      <button type="submit">Search</button>
    </form>
  );
}
