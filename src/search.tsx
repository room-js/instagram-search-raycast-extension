import { Action, ActionPanel, Form, open } from '@raycast/api';
import { FormValidation, useForm } from '@raycast/utils';

interface FormValues {
  query: string;
}

const queries = [
  'Love Quotes',
  'Fashion Trends',
  'Travel Destinations',
  'Healthy Recipes',
  'Home Decor Ideas',
  'Fitness Motivation',
  'Makeup Tutorials',
  'Photography Tips',
  'Summer Outfits',
  'Art Inspiration',
  'Cute Animals',
  'Food Photography',
  'Street Style',
  'Workout Routines',
  'Entrepreneur Life',
  'Digital Marketing',
  'Motivational Quotes',
  'Luxury Lifestyle',
  'Wedding Ideas',
  'Interior Design',
  'Parenting Tips',
  'Music Videos',
  'Funny Memes',
  'Pet Lovers',
  'Beauty Hacks',
  'Skin Care Routine',
  'Business Advice',
  'Self Improvement',
  'Mindfulness Meditation',
  'Travel Photography',
  'Nature Lovers',
  'Cooking Tips',
  'Startup Stories',
  'Book Recommendations',
  'Life Goals',
  'Success Mindset',
  'Relationship Advice',
  'Home Workouts',
  'Tech Gadgets',
  'Fashion Inspiration',
  'Healthy Lifestyle',
  'Street Photography',
  'Car Enthusiasts',
  'Adventure Travel',
  'Outdoor Activities',
  'Creative Ideas',
  'Productivity Tips',
  'Mental Health Awareness',
  'Coffee Lovers',
  'Sustainable Living',
];

export default function Command() {
  const { handleSubmit } = useForm<FormValues>({
    onSubmit(values) {
      const instagramSearchUrl = new URL(
        'https://www.instagram.com/explore/search/keyword',
      );
      instagramSearchUrl.searchParams.set('q', values.query);
      open(instagramSearchUrl.href);
    },
    validation: {
      query: FormValidation.Required,
    },
  });

  const getRandomQuery = () =>
    queries[Math.floor(Math.random() * queries.length)];

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Open In Browser" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Description text="Type your query and trigger the action" />
      <Form.TextField autoFocus placeholder={getRandomQuery()} id="query" />
    </Form>
  );
}
