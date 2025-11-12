import useLandingStyles from './ui/landingStyles';
import Stack from '@mui/material/Stack';

import KitchenDisplay from './ui/KitchenDisplay';
import WoodshopDisplay from './ui/Woodshop';
import EngineeringDisplay from './ui/Engineering';
import RecoveryDisplayed from './ui/Recovery';

type LandingPageProps = {
    setValue: (v: number) => void;
    setSelectedIndex?: (i: number) => void;
};

export default function LandingPage(props: LandingPageProps) {
    const classes = useLandingStyles();
    // No local media queries needed here; EngineeringDisplay handles its own responsive checks

    return (
        <Stack direction='column' className={classes.mainContainer}>
            <EngineeringDisplay setValue={props.setValue} />

            <RecoveryDisplayed setValue={props.setValue} />

            <WoodshopDisplay setValue={props.setValue} />
            <KitchenDisplay setValue={props.setValue} />
        </Stack>
    );
}
