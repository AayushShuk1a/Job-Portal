import "./features.css"
import { WorkOutline, People, TrackChanges, Share } from '@mui/icons-material';

const features = [
    {
        name: 'Daily Fresh Jobs',
        description:
            'Get access to the latest job postings every day, tailored to your profile and preferences. Your next opportunity is just a click away.',
        icon: WorkOutline,
    },
    {
        name: 'Community Support Hub',
        description:
            'Join a thriving community of professionals for peer support, job tips, and career growth advice. You’re never alone in your job search.',
        icon: People,
    },
    {
        name: 'Application Tracker',
        description:
            'Keep track of all your job applications in one place. Easily monitor your progress and stay organized with our Job Tracker.',
        icon: TrackChanges,
    },
    {
        name: 'Social Media Boost',
        description:
            'Leverage your social media presence to increase visibility and boost your job search. We’ve got you covered on all platforms.',
        icon: Share,
    },
];


const Features = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="header">
                    <h2>Land Your Dream Job Faster</h2>
                    <p className="title">Boost your job search</p>
                    <p className="description">
                        Stay ahead of the competition with access to fresh job listings, community support, and a powerful job tracking tool.
                        Maximize your chances of success and accelerate your career growth with our comprehensive platform.
                    </p>
                </div>
                <div className="features">
                    <dl className="feature-list">
                        {features.map((feature) => (
                            <div key={feature.name} className="feature-item">
                                <dt className="feature-title">
                                    <div className="icon-box">
                                        <feature.icon aria-hidden="true" className="feature-icon" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="feature-description">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Features;
