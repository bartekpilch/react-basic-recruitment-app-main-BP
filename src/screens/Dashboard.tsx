import { useEffect, useState } from "react";
import { navigationRoutes } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";
import { getDashboards } from "../service/dashboard.service";
import { Box, Button, Grid, Paper, styled, Typography } from "@mui/material";

export const DashboardScreen = () => {
  const [items, setItems] = useState<DashboardType[]>([]);

  const Tittle = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    cursor: "pointer",
    backgroundColor: "#202020",
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    color: "#e2e2e2",
  }));

  const Text = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    color: "#7e7e7e",
  }));

  const getLinkTo = (id: DashboardItem) => {
    switch (id) {
      case DashboardItem.DASHBOARD:
        return navigationRoutes.dashboard.path;
      case DashboardItem.SPORTS:
        return navigationRoutes.sports.path;
      case DashboardItem.COMPETITIONS:
      case DashboardItem.ORGANISATIONS:
      case DashboardItem.USERS:
      case DashboardItem.SCHEDULING:
        return navigationRoutes.dashboard.path;
    }
  };

  useEffect(() => {
    getDashboards()
      .then(function (response) {
        return response;
      })
      .then(function (data) {
        setItems(data);
      });

    // TODO: get data from dashboard.service
  }, []);

  if (!items || items.length === 0) {
    return <NoResults />;
  }
  const renderData = () => {
    if (!items) {
    } else {
      return (
        <>
          {items.map((val, key) => {
            return (
              <Grid item xs={6} key={key}>
                <Box
                  sx={{ minHeight: 220, background: "#ffffff", boxShadow: 2 }}
                >
                  <Tittle
                    onClick={() => {
                      window.location.pathname =
                        val.id === "dashboard" ? "/" : val.id;
                    }}
                  >
                    {val.title}
                  </Tittle>
                  <Text>{val.text}</Text>

                  <Box
                    m={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                  >
                    <Button
                      variant="text"
                      onClick={() => {
                        console.log("id: " + val.id);
                      }}
                    >
                      MORE INFO
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </>
      );
    }
  };

  return (
    <Box sx={{ flexGrow: 1, marginX: 3, mt: 6 }}>
      <Grid container spacing={2}>
        {renderData()}
      </Grid>
    </Box>
  );
};
