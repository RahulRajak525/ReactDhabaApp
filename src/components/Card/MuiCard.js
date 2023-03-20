import classes from "./MuiCard.module.css";
import { Card, CardContent, Typography, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
export const MuiCard = () => {
  const navigate = useNavigate();
  const availableMeals = useSelector((state) => state.cart.mealsAvailable);
  const goToMealItemList = (menu, name) => {
    navigate("/mealItem", { state: { data: menu, restaurantName: name } });
  };

  return (
    <div className={classes.meals}>
      <div className={classes.availableMeals1}>
        {availableMeals.map((item) => (
          <Card
            sx={{ maxWidth: 350 }}
            key={item.uuid}
            className={classes.Card}
            onClick={() => goToMealItemList(item.menu, item.name)}
          >
            <div className={classes.ImageNshare}>
              <div className={classes.img}>
                <img src={item.imageUrl} alt={item.title} loading="lazy" />
              </div>
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={classes.title}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={classes.title}
              >
                {item.description}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <span>{item.rating}</span>
              <div className={classes.starIcon}>
                <span>
                  <StarIcon fontSize="medium" />
                </span>
              </div>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
