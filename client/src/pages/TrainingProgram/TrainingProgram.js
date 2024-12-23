import classNames from "classnames/bind";
import styles from "./trainingProgram.module.scss";
import TrainingItem from "~/components/TrainingItem/TrainingItem";
const cx = classNames.bind(styles);


function TrainingProgram() {
    return (<div className={cx("wrapper")}>
        <TrainingItem/>
        <TrainingItem/>
        <TrainingItem/>
        <TrainingItem/>
        <TrainingItem/>
        <TrainingItem/>
        <TrainingItem/>
        <TrainingItem/>
    </div>);

}

export default TrainingProgram;