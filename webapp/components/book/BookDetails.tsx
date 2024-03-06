import StaticRatingStars from '@/components/book/StaticRatingStars';

export default function BookDetails() {
  return (
    <div className='mb-5'>
      <h1 className='text-4xl font-semibold'>
        Getting Stoned with Savages: A Trip Through the Islands of Fiji and
        Vanuatu
      </h1>
      <h3 className='text-2xl font-extralight'>J. Maarten Troost</h3>
      <div>
        <StaticRatingStars _className='' bookRating={2} />
      </div>
      <p className='font-normal'>
        Getting Stoned with Savages tells the hilarious story of Troost’s time
        on Vanuatu—a rugged cluster of islands where the natives gorge
        themselves on kava and are still known to “eat the man.” Falling into
        one amusing misadventure after another, Troost struggles against
        typhoons, earthquakes, and giant centipedes and soon finds himself swept
        up in the laid-back, clothing-optional lifestyle of the islanders. When
        Sylvia gets pregnant, they decamp for slightly-more-civilized Fiji, a
        fallen paradise where the local chiefs can be found watching rugby in
        the house next door. And as they contend with new parenthood in a
        country rife with prostitutes and government coups, their son begins to
        take quite naturally to island living—in complete contrast to his dad.
      </p>
    </div>
  );
}
