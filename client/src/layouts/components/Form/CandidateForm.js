import classNames from "classnames/bind";
import styles from "./Form.module.scss";
import FormGroup from "~/components/FormGroup";
import { isNotEmpty } from "~/hooks/validate";

const cx = classNames.bind(styles);

function CandidateForm({ref, data}) {
  return (
    <form className={cx('post-form')} ref={ref}>
      <FormGroup
        label="Tiêu đề"
        name="title"
        value={data?.title || ""}
        inputType="text"
        placeholder="Tiêu đề"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập tiêu đề!' }]}
      />
      <FormGroup
        label="Lương"
        name="salary"
        value={data?.salary || ""}
        layout="haft"
        inputType="text"
        placeholder="Lương"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập lương!' },
        ]}
      />
      <FormGroup
        label="Địa điểm"
        name="location"
        value={data?.location || ""}
        layout="haft"
        inputType="text"
        placeholder="Địa điểm"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập địa điểm!' }]}
      />
      <FormGroup
        label="Kinh nghiệm"
        name="experience"
        value={data?.experience || ""}
        layout="haft"
        inputType="text"
        // onChange={(e) => setExperience(e.target.value)}
        selectData={['Không yêu cầu', 'Dưới 1 năm', '1 - 2 năm', '2 - 3 năm']}
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng chọn kinh nghệm!' }]}
      />
      <FormGroup
        label="Ngày hết hạn"
        name="expiration_date"
        value={data?.expiration_date || ""}
        layout="haft"
        inputType="date"
        placeholder="Ngày hết hạn"
        // onChange={(e) => setExpirationDate(e.target.value)}
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng chọn ngày hết hạn!' }]}
      />

      <FormGroup
        label="Mô tả chi tiết công việc"
        name="content"
        value={data?.content || ""}
        textarea
        // onChange={(e) => setContent(e.target.value)}
        handleValidate={[{ funct: isNotEmpty, message: 'Vui nhập mô tả!' }]}
      />
    </form>
  );
}

export default CandidateForm;
