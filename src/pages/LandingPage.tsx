import useLandingStyles from '@components/ui/landingStyles';
import Stack from '@mui/material/Stack';

import KitchenDisplay from '@components/ui/landing/KitchenDisplay';
import WoodshopDisplay from '@components/ui/landing/Woodshop';
import EngineeringDisplay from '@components/ui/landing/Engineering';
import RecoveryDisplayed from '@components/ui/landing/Recovery';

type LandingPageProps = {
  setValue: (v: number) => void;
  setSelectedIndex?: (i: number) => void;
};

export default function LandingPage(props: LandingPageProps) {
  const classes = useLandingStyles();
  // No local media queries needed here; EngineeringDisplay handles its own responsive checks

  return (
    <Stack direction="column" className={classes.mainContainer}>
      <EngineeringDisplay setValue={props.setValue} />

      <RecoveryDisplayed setValue={props.setValue} />

      <WoodshopDisplay setValue={props.setValue} />
      <KitchenDisplay setValue={props.setValue} />
    </Stack>
  );
}
