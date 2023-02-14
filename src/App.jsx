import { Box } from './components/Box';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Loader from 'components/Loader';
import { useGetAllContactsQuery } from 'redux/contactsSlice';

export default function App() {
  const { data, isFetching, isError } = useGetAllContactsQuery();
  return (
    <Box pt="120px">
      <Box m="auto" p={4} maxWidth="400px" bg="#cfe5e7" ko>
        <Section title="Phone-book">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList contacts={data} />
          {isFetching && !isError && <Loader />}
          {!isFetching && <ContactList />}
        </Section>
      </Box>
    </Box>
  );
}
