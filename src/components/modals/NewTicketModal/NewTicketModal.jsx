import { useState } from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { PROVIDERS, ISSUE_TYPES } from 'constants';
import { MatchProviderIcon, U4ID } from 'utils';
import { axiosMockInstance } from 'api';
import './new-ticket-modal.css';

const NewTicketModal = ({title: ticketTitle, description: ticketDescription, closeModal}) => {
	const [providerProjects, setProviderProjects] = useState([]);
	const [isProjectsLoading, setIsProjectsLoading] = useState(false);

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		getValues,
		watch,
		resetField
	} = useForm({
		defaultValues: {
			id: U4ID,
			provider: null,
			project: null,
			issueType: null,
			title: ticketTitle,
			description: ticketDescription
		},
	});

	const watchProject = watch('project');
	const watchIssueType = watch('issueType');

	const onSubmit = (data) => {
		console.log(data);
		// setSuccessMsg('User registration is successful.');
	};

	const handleProviderChange = async ({ target }) => {
		const selectedProvider = target.getAttribute("data-provider")
		resetField("project")
		resetField("issueType")

		setIsProjectsLoading(true)
		const result = await axiosMockInstance.get(`/api/provider/${selectedProvider}/projects`);
		setProviderProjects(result.data)
		setIsProjectsLoading(false)
	}

	return (
		<div className='new-ticket-modal'>
			<div className='title'>Create Ticket</div>

			<hr />

			<form className='form-container' onSubmit={handleSubmit(onSubmit)}>
				<div className='providers-container'>
					{Object.keys(PROVIDERS).map((provider) => (
						<label key={provider} className='provider'>
							<input
								type='radio'
								name='providers'
								data-provider={PROVIDERS[provider]}
								onClick={handleProviderChange}
								value={PROVIDERS[provider]}
								{...register('provider', {
									required: 'Provider is required.',
								})}
							/>
							{MatchProviderIcon(PROVIDERS[provider], true)}
						</label>
					))}
					{errors.provider && (
						<p className='errorMsg'>
							This is a required field.
						</p>
					)}
				</div>

				<div className='info-container'>
					<label className='subtitle'>
						<span className='input-text'>Project</span>
						<Controller
							name='project'
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select {...field} options={providerProjects} placeholder='Select Project' isLoading={isProjectsLoading} />
							)}
						/>
						{errors.project && (
							<p className='errorMsg'>
								This is a required field.
							</p>
						)}
					</label>
					<label className='subtitle'>
						<span className='input-text'>Issue Type</span>
						<Controller
							name='issueType'
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select {...field} placeholder='Select Issue Type' options={ISSUE_TYPES} />
							)}
						/>
						{errors.issueType && (
							<p className='errorMsg'>
								This is a required field.
							</p>
						)}
					</label>
				</div>

				<hr />

				{watchProject && watchIssueType ? (
					<div className='details-container'>
						<div className='input-text'>Title</div>
						<input
							type='text'
							defaultValue={getValues('title')}
							{...register('title', {
								required: 'title is required.',
							})}
						/>
						{errors.title && (
							<p className='errorMsg'>
								This is a required field.
							</p>
						)}
						<div className='input-text'>Description</div>
						<textarea
							defaultValue={getValues('description')}
							{...register('description', {
								required: 'Description is required.',
							})}
						/>
						{errors.description && (
							<p className='errorMsg'>
								This is a required field.
							</p>
						)}
					</div>
				) : null}

				<div className='footer'>
					<button className='cancel-button' onClick={closeModal}>Cancel</button>
					<button className='submit-button' type='submit' disabled={Object.keys(errors).length !== 0}>Create Ticket</button>
				</div>
			</form>
		</div>
	);
};

export default NewTicketModal;
