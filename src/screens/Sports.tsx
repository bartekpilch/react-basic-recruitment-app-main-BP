import { useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { Table, TableColumn } from "../components/Table/Table";
import { Visibility } from "@mui/icons-material";
import { getSportById, getSports } from "../service/sports.service";
import { Box, Grid, Typography } from "@mui/material";

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(
    undefined
  );

  const columns: TableColumn<SportType>[] = [
    { id: "sport", label: "Sport", value: "name" },
    { id: "location", label: "Location", value: "location" },
    { id: "name", label: "Name", value: "shortDescription" },
    {
      id: "actions",
      label: "Actions",
      value: <Visibility />,
      textAlign: "right",
    },
  ];

  const getSportDetails = (id: SportType["id"]) => {
    getSportById(id).then(function (data) {
      setSportDetails(data);
    });
  };

  useEffect(() => {
    getSports().then(function (data) {
      setSports(data);
    });
  }, []);

  if (!sports) {
    return <NoResults />;
  }

  return (
    <Grid item xs={12} sx={{ mt: 7, ml: 5, p: 5 }}>
      <Typography variant="h6" sx={{}}>
        Sports
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#525252", mb: 3 }}>
        {sports.teaser}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <Table columns={columns} items={sports.items} title={"Sports"} />
        </Grid>
      </Grid>
    </Grid>
  );
};
