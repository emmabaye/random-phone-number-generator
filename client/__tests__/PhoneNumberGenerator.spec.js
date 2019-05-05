/* eslint-disable import/no-extraneous-dependencies */
import PhoneNumberGenerator from '../components/PhoneNumberGenerator';

describe("PhoneNumberGenerator component ", () => {
  const mockData = ["0123456789", "0987654321"];

  beforeEach(() => {
    axiosMock
      .onAny("/download/generatedphonenumbers.json")
      .reply(200, mockData);
    axiosMock
      .onAny("/api/generate-numbers")
      .reply(200, mockData);
  });

  afterEach(() => axiosMock.reset());

  const wrapper = shallow(<PhoneNumberGenerator />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle on click for generating new numbers", () => {
    wrapper.setState({
      phoneNumbers: [],
      loading: false,
      ascending: false,
    });

    const generateNumbersButton = wrapper.find('.btn').at(0);

    generateNumbersButton.simulate("click");

    expect(wrapper.state().loading).toEqual(true);
  });

  it("should handle toggle order ", () => {
    const toggleHeader = wrapper.find('.toggleHeader').at(0);
    toggleHeader.simulate("click");

    expect(wrapper.state().ascending).toBe(false);
  });
});
