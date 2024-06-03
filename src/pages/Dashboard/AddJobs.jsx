import { FormRow, FromRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import messages from "../../util/messages";
import FormRowSelect from "../../components/FormRowSelect";
import { handleChangeJobState, clearValues, createJob } from "../../features/job/jobSlice";

const AddJobs = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error(messages.fillOutFills);
      return;
    }
    dispatch(createJob({position, company, jobLocation, status}));
  };

  const handleJobInput = (e) => {
    dispatch(
      handleChangeJobState({ name: e.target.name, value: e.target.value })
    );
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          {/**Position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/**Company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/**Location */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/**Job status */}
          <FormRowSelect
            name="status"
            labelText="Job status"
            value={status}
            optionsSource={statusOptions}
            handleChange={handleJobInput}
          />
          {/**Job Container */}

          <div className="btn-container">
            <button
              className="btn btn-block clear-btn"
              type="button"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {" "}
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJobs;
