import React from "react";
import { useFormik } from "formik";
import { prices } from "../../utils/carBrandsPrices";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/selectors";
import { setCars } from "../../redux/cars/carsSlice";
import { StyledForm, MileageInputs } from "./FilterForm.styled";


export default function FilterComponent() {
  const cars = useSelector(getCars);
  const uniqueBrands = [...new Set(cars.map((car) => car.brand))];

  const dispatch = useDispatch();

  const handleReset = () => {
    formik.resetForm();
    dispatch(setCars([]));
  };

  const formik = useFormik({
    initialValues: {
      brand: "",
      price: "",
      mileageFrom: "",
      mileageTo: "",
    },
    onSubmit: (values) => {

      const filteredCars = cars.filter((car) => {
        const isBrandMatch = values.brand ? car.brand === values.brand : true;
        const isPriceMatch = values.price
          ? car.rentalPrice <= values.price
          : true;
        const isMileageMatch =
          (!values.mileageFrom || car.mileage >= values.mileageFrom) &&
          (!values.mileageTo || car.mileage <= values.mileageTo);

        return isBrandMatch && isPriceMatch && isMileageMatch;
      });
      dispatch(setCars(filteredCars));
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
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
          {uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="price">Price/ 1 hour:</label>
        <select
          id="price"
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        >
          <option value="">To $</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>

      <MileageInputs>
        <label id="mileagelabel" htmlFor="mileageFrom">Сar mileage / km</label>
        <input
          id="mileageFrom"
          name="mileageFrom"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mileageFrom}
          placeholder="From"
        />

        <label htmlFor="mileageTo"> </label>
        <input
          id="mileageTo"
          name="mileageTo"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mileageTo}
          placeholder="To"
        />
      </MileageInputs>

      <button type="submit">Search</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </StyledForm>
  );
}
