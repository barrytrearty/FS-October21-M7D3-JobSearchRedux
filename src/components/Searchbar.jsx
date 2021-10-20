import { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Dropdown,
  FormControl,
  InputGroup,
  DropdownButton,
} from "react-bootstrap";

const Searchbar = ({ setJobsArray, searchQuery, setSearchQuery, skip }) => {
  const [searchParameter, setSearchParameter] = useState("Search");

  const getJobs = async () => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?${searchParameter.toLowerCase()}=${searchQuery}&limit=10&offset=${skip}`
      );
      let jobsProm = await response.json();
      setJobsArray(jobsProm.data);
      //   console.log(jobsArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, [searchQuery, searchParameter, skip]);

  return (
    <div>
      <Container>
        {" "}
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-secondary"
            title={searchParameter}
            id="input-group-dropdown-1"
          >
            <Dropdown.Item onClick={() => setSearchParameter("Search")}>
              Search
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSearchParameter("Title")}>
              Title
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSearchParameter("Company")}>
              Company
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSearchParameter("Category")}>
              Category
            </Dropdown.Item>
          </DropdownButton>
          <FormControl
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Text input with dropdown button"
          />
        </InputGroup>
      </Container>
    </div>
  );
};

export default Searchbar;
